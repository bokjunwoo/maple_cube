import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
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
import { useState } from 'react';
import { PaginationUI } from './PaginationUI';
import { ITEMS_COUNT_PER_PAGE } from '../../constants/units';

type AccordionUIType = {
  data: CubeHistory[];
  selectedCubeType: string;
};

export const AccordionUI = ({ data, selectedCubeType }: AccordionUIType) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * 20;
  const endIndex = startIndex + 20;
  const currentData = data.slice(startIndex, endIndex);

  const isInCommonCube = COMMON_CUBE.includes(selectedCubeType);
  const isInAdditionalCube = COMMON_ADDITIONAL_CUBE.includes(selectedCubeType);

  return (
    <Box>
      {currentData.map((item, i) => {
        return (
          <Accordion key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-content${i + 1}`}
              id={`panel-content${i + 1}`}
            >
              <Typography variant="subtitle1">
                큐브 옵션 {data.length - (startIndex + i)}
              </Typography>
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

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 1 }}>
        <PaginationUI
          count={Math.ceil(data.length / ITEMS_COUNT_PER_PAGE)}
          onChange={handlePageChange}
          page={currentPage}
        />
      </Box>
    </Box>
  );
};
