import { Form, Input, Select, Button } from 'antd';

const SearchForm = (
  { setSearchQuery, setResultsNumber, resultsNumber }: {
    setSearchQuery: Function,
    setResultsNumber: Function,
    resultsNumber: number,
  }
  ) => {
  const handleFormSubmit = ({ query, resultsNumber }: { query: string, resultsNumber: number }): void => {
    setResultsNumber(resultsNumber)
    setSearchQuery(query);
  }

  return (
    <Form
      layout="horizontal"
      onFinish={handleFormSubmit}
      labelCol={{ span: 8 }}
      initialValues={{ resultsNumber }}
    >
      <Form.Item label="Results number" name="resultsNumber" wrapperCol={{ span: 4 }}>
        <Select>
          <Select.Option value={5}>5</Select.Option>
          <Select.Option value={10}>10</Select.Option>
          <Select.Option value={25}>25</Select.Option>
          <Select.Option value={50}>50</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Search query" name="query">
        <Input placeholder="Query" allowClear />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button type="primary" htmlType="submit">Search</Button>
      </Form.Item>
    </Form>
  )
}

export default SearchForm;
