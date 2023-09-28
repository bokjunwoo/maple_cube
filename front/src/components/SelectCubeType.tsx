import { CubeHistory } from '../api/api';
import { SelectCubeGrade } from './SelectCubeGrade';
import { CUBE_NAME, cubeTypeInfo } from '../constants/cubeGuide';
import { RadioUI } from './ui/RadioUI';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  currentPageState,
  selectedCubeGradeState,
} from '../atom/cubeDataState';

type SelectCubeTypeType = {
  filterdata: CubeHistory[];
  selectedCubeName: string;
};

export const SelectCubeType = ({
  filterdata,
  selectedCubeName,
}: SelectCubeTypeType) => {
  const [selectedCubeGrade, setSelectedCubeGrade] = useRecoilState(
    selectedCubeGradeState
  );
  const setCurrentPage = useSetRecoilState(currentPageState);

  const handleCubeGradeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCubeGrade(e.target.value);
    setCurrentPage(1);
  };

  const optionGrade = [
    ...new Set(
      filterdata.map(
        (item) =>
          (item.after_potential_options.length === 0 &&
            item.additional_potential_option_grade) ||
          (item.after_additional_potential_options.length === 0 &&
            item.potential_option_grade) ||
          ''
      )
    ),
  ];

  const gradeCounts: { [key: string]: number } = {};

  filterdata.forEach((item) => {
    const grade =
      (item.after_potential_options.length === 0 &&
        item.additional_potential_option_grade) ||
      (item.after_additional_potential_options.length === 0 &&
        item.potential_option_grade);
    if (grade) {
      gradeCounts[grade] = (gradeCounts[grade] || 0) + 1;
    }
  });

  const potentialName =
    selectedCubeName === CUBE_NAME.QUESTIONABLE_ADDITIONAL_CUBE ||
    selectedCubeName === CUBE_NAME.ADDITIONAL_CUBE ||
    selectedCubeName === CUBE_NAME.WHITE_ADDITIONAL_CUBE
      ? '에디셔널'
      : '잠재능력';

  return (
    <>
      <RadioUI
        data={optionGrade}
        label="큐브 선택"
        handleChange={handleCubeGradeSelect}
        countKeyValue={gradeCounts}
        info={cubeTypeInfo}
        value={selectedCubeGrade}
      />

      {selectedCubeGrade && (
        <SelectCubeGrade
          filterdata={filterdata}
          selectedCubeGrade={selectedCubeGrade}
          potentialName={potentialName}
          selectedCubeName={selectedCubeName}
        />
      )}
    </>
  );
};
