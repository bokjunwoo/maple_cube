import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CubeHistory } from '../../api/api';
import {
  COMMON_CUBE,
  COMMON_ADDITIONAL_CUBE,
  CUBE_NAME,
} from '../../constants/cubeGuide';

import { WhiteAdditionalCubeOptionUI } from './WhiteAdditionalCubeOptionUI';
import { AdditionalCubeOptionUI } from './AdditionalCubeOptionUI';
import { BlackCubeOptionUI } from './BlackCubeOptionUI';
import { CommonCubeOptionUI } from './CommonCubeOptionUI';

type AccordionUIType = {
  data: CubeHistory[];
  selectedCubeType: string;
};

export const AccordionUI = ({ data, selectedCubeType }: AccordionUIType) => {
  const isInCommonCube = COMMON_CUBE.includes(selectedCubeType);
  const isInAdditionalCube = COMMON_ADDITIONAL_CUBE.includes(selectedCubeType);

  return (
    <div>
      {data.map((item, i) => {
        return (
          <Accordion key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-content${i + 1}`}
              id={`panel-content${i + 1}`}
            >
              <Typography>큐브 옵션 {i + 1}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                {isInCommonCube && <CommonCubeOptionUI data={item} />}

                {selectedCubeType === CUBE_NAME.BLACK_CUBE && (
                  <BlackCubeOptionUI data={item} />
                )}

                {isInAdditionalCube && <AdditionalCubeOptionUI data={item} />}

                {selectedCubeType === CUBE_NAME.WHITE_ADDITIONAL_CUBE && (
                  <WhiteAdditionalCubeOptionUI data={item} />
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
