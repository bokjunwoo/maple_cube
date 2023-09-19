import { CubeHistory } from '../../api/api';

type AdditionalCubeOptionUIType = {
  data: CubeHistory;
};

export const AdditionalCubeOptionUI = ({
  data,
}: AdditionalCubeOptionUIType) => {
  return (
    <div>
      {data.after_additional_potential_options.map((v, i) => {
        return <p key={i}>{v.value}</p>;
      })}
    </div>
  );
};
