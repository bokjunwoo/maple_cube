import { CubeHistory } from '../api/api';

type ListCubeTypeNameType = {
  data: CubeHistory[];
};

export const ListCubeType = ({ data }: ListCubeTypeNameType) => {
  const cubeTypeNames = [...new Set(data.map((item) => item.cube_type))];

  return (
    <>
      <h3>사용한 큐브</h3>
      <ul>
        {cubeTypeNames.map((cubeTypeName) => (
          <li key={cubeTypeName}>{cubeTypeName}</li>
        ))}
      </ul>
    </>
  );
};
