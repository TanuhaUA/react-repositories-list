import { Table } from 'antd';
import columns from './columns';
import { RepoReformatted } from '../../types';

const ResultsTable = ({ repos }: { repos: Array<RepoReformatted>}) => {
  return (
    <Table columns={columns} dataSource={repos} pagination={false} />
  )
}

export default ResultsTable;
