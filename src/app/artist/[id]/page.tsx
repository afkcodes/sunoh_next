interface Props {
  params: {
    id: string;
  };
}
const index = ({ params }: Props) => {
  return <div>Artist ID: {params.id}</div>;
};

export default index;
