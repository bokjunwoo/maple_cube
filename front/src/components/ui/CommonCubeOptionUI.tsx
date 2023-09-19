import { CubeHistory } from '../../api/api';

type CommonCubeOptionUIType = {
  data: CubeHistory;
};

export const CommonCubeOptionUI = ({ data }: CommonCubeOptionUIType) => {
  return (
    <div>
      {data.after_potential_options.map((v, i) => {
        return <p key={i}>{v.value}</p>;
      })}
    </div>
  );
};
