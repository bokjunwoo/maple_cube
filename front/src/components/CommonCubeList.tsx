import { CubeHistory } from '../api/api';

type CommonCubeListType = {
  data: CubeHistory[];
};

export const CommonCubeList = ({ data }: CommonCubeListType) => {
  return (
    <>
      {data.map((item, i) => {
        return (
          <div key={item.id}>
            <p>{i + 1}</p>
            {item.before_potential_options.map((v, i) => {
              return (
                <div key={i}>
                  <p>{v.value}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
