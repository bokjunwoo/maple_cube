import { CubeHistory } from '../api/api';
import {
  COMMON_ADDITIONAL_CUBE,
  COMMON_CUBE,
  CUBE_NAME,
} from '../constants/cubeGuide';
import { AdditionalCubeList } from './AdditionalCubeList';
import { BlackCubeList } from './BlackCubeList';
import { CommonCubeList } from './CommonCubeList';
import { WhiteAdditionalCubeList } from './WhiteAdditionalCubeList';

type SelectCubeGradeType = {
  data: CubeHistory[];
  selectedCubeGrade: string;
  potentialName: string;
  selectedCubeType: string;
};

export const SelectCubeGrade = ({
  data,
  selectedCubeGrade,
  potentialName,
  selectedCubeType,
}: SelectCubeGradeType) => {
  const gradeName =
    potentialName === '에디셔널'
      ? 'additional_potential_option_grade'
      : 'potential_option_grade';

  const selectedGrades = data.filter(
    (item) => item[gradeName] === selectedCubeGrade
  );

  console.log('selectedGrades', selectedGrades);
  console.log('selectedCubeType', selectedCubeType);

  const isInCommonCube = COMMON_CUBE.includes(selectedCubeType);
  const isInAdditionalCube = COMMON_ADDITIONAL_CUBE.includes(selectedCubeType);

  return (
    <>
      {isInCommonCube && <CommonCubeList data={selectedGrades} />}

      {selectedCubeType === CUBE_NAME.BLACK_CUBE && (
        <BlackCubeList data={selectedGrades} />
      )}

      {isInAdditionalCube && <AdditionalCubeList data={selectedGrades} />}

      {selectedCubeType === CUBE_NAME.WHITE_ADDITIONAL_CUBE && (
        <WhiteAdditionalCubeList data={selectedGrades} />
      )}
    </>
  );
};
