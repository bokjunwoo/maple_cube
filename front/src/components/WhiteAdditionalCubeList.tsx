import { CubeHistory } from '../api/api';

type WhiteAdditionalCubeListType = {
  data: CubeHistory[];
};

export const WhiteAdditionalCubeList = ({
  data,
}: WhiteAdditionalCubeListType) => {
  return (
    <>
      {data.map((item, i) => {
        return (
          <div key={item.id}>
            <p>{i + 1}</p>
            <p>before</p>
            {item.before_additional_potential_options.map((v, i) => {
              return (
                <div key={i}>
                  <p>{v.value}</p>
                </div>
              );
            })}
            <p>after</p>
            {item.after_additional_potential_options.map((v, i) => {
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
