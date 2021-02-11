import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import { DataFromResponse, RepoReformatted } from './types';
import { fetchRepos, reformatRepos } from "./utils/reposDataUtils";
import ResultsTable from "./components/ResultsTable";
import SearchForm from "./components/SearchForm";
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [resultsNumber, setResultsNumber] = useState<number>(5)
  const [repos, setRepos] = useState<Array<RepoReformatted>>([])

  useEffect(() => {
    fetchRepos(searchQuery, resultsNumber)
      .then(({ data }: { data: DataFromResponse }) => {
        setRepos(reformatRepos(data))
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchQuery, resultsNumber]);

  return (
    <Layout style={{ padding: '20px' }}>
      <Row justify="center" gutter={[0, 20]}>
        <Col span={13}>
          <SearchForm setSearchQuery={setSearchQuery} resultsNumber={resultsNumber} setResultsNumber={setResultsNumber} />
        </Col>
        <Col span={24}>
          <ResultsTable repos={repos} />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
