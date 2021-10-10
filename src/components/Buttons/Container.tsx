import { useContext } from 'react';

import { Box } from '@mui/material';

import { ThemeContext } from '../../modules/theme/context';
import { theme } from '../../modules/theme/theme';

type Props = {
    children: React.ReactNode;
};

export function ButtonsContainer({ children }: Props) {
    const { themeMode } = useContext(ThemeContext);

    return (
        <Box
            sx={{
                bgcolor: theme[themeMode].containerBgColor,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                padding: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
            }}
        >
            {children}
        </Box>
    );
}
