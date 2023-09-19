import { CubeHistory } from '../../api/api';

type WhiteAdditionalCubeOptionUIType = {
  data: CubeHistory;
};

export const WhiteAdditionalCubeOptionUI = ({
  data,
}: WhiteAdditionalCubeOptionUIType) => {
  return (
    <div>
      <h3>before</h3>
      {data.before_additional_potential_options.map((option, i) => {
        return <p key={i}>{option.value}</p>;
      })}
      <hr />
      <h3>after</h3>
      {data.after_additional_potential_options.map((option, i) => {
        return <p key={i}>{option.value}</p>;
      })}
    </div>
  );
};
