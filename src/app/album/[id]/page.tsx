interface Props {
  params: {
    id: string;
  };
}
const index = ({ params }: Props) => {
  return <div>Album ID: {params.id}</div>;
};

export default index;
