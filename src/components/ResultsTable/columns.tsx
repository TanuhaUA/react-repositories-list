import {ForkOutlined, StarOutlined} from "@ant-design/icons";

const columns = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
    render: (name: string, { url }: { url : string }) => (<a href={url} target="_blank">{name}</a>)
  },
  {
    title: () => <span><StarOutlined style={{ color: '#ffd500' }} /> Stars</span>,
    key: 'stars',
    dataIndex: 'stars',
    render: (stars: number) => (
      <span>
        <StarOutlined style={{ color: '#ffd500' }} /> {stars}
      </span>
    )
  },
  {
    title: () => <span><ForkOutlined style={{ color: '#bab9b7' }} /> Forks</span>,
    key: 'forks',
    dataIndex: 'forks',
    render: (forks: number) => (
      <span>
        <ForkOutlined style={{ color: '#bab9b7' }} /> {forks}
      </span>
    )
  },
];

export default columns;