interface Props {
  params: {
    id: string;
  };
}
const index = ({ params }: Props) => {
  return <div>Playlist ID: {params.id}</div>;
};

export default index;
