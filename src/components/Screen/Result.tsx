import { useContext } from 'react';

import { Box } from '@mui/material';

import { ThemeContext } from '../../modules/theme/context';
import { theme } from '../../modules/theme/theme';

type Props = {
    result: string;
};

export function ScreenResult({ result }: Props) {
    const { themeMode } = useContext(ThemeContext);

    return (
        <Box
            sx={{
                fontSize: '2.5rem',
                fontWeight: 500,
                marginBottom: 3,
                marginRight: 2,
                textAlign: 'right',
                color: theme[themeMode].color,
            }}
        >
            {result}
        </Box>
    );
}
