import { CubeHistory } from '../api/api';

type AdditionalCubeListType = {
  data: CubeHistory[];
};

export const AdditionalCubeList = ({ data }: AdditionalCubeListType) => {
  return (
    <>
      {data.map((item, i) => {
        return (
          <div key={item.id}>
            <p>{i + 1}</p>
            {item.before_additional_potential_options.map((v, i) => {
              return (
                <div key={i}>
                  <p>{v.value}</p>
                </div>
              );
            })}
            <hr />
          </div>
        );
      })}
    </>
  );
};
