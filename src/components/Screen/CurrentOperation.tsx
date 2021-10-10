import { useContext } from 'react';

import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import { ThemeContext } from '../../modules/theme/context';
import { theme } from '../../modules/theme/theme';

type Props = {
    currentOperation: string;
};

export function ScreenCurrentOperation({ currentOperation }: Props) {
    const { themeMode } = useContext(ThemeContext);

    return (
        <Box
            sx={{
                paddingTop: 5,
                marginRight: 2,
                marginLeft: 2,
                paddingBottom: 1,
                marginBottom: -1,
                textAlign: 'right',
                overflowX: 'scroll',
            }}
        >
            <Typography color={currentOperation ? theme[themeMode].color : grey[400]}>
                {currentOperation || 'Pas de calcul en cours'}
            </Typography>
        </Box>
    );
}
