import { CubeHistory } from '../../api/api';

type BlackCubeOptionUIType = {
  data: CubeHistory;
};

export const BlackCubeOptionUI = ({ data }: BlackCubeOptionUIType) => {
  return (
    <div>
      <h3>before</h3>
      {data.before_potential_options.map((option, i) => {
        return <p key={i}>{option.value}</p>;
      })}
      <hr />
      <h3>after</h3>
      {data.after_potential_options.map((option, i) => {
        return <p key={i}>{option.value}</p>;
      })}
    </div>
  );
};
