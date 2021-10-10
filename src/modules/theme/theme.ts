import { blueGrey, grey } from '@mui/material/colors';

import { ThemeMode } from './context';

export const theme: {
    [themeKey in ThemeMode]: {
        bgColor: string;
        containerBgColor: string;
        buttonBgColor: string;
        buttonHoverBgColor: string;
        color: string;
    };
} = {
    light: {
        bgColor: 'white',
        containerBgColor: grey[100],
        buttonBgColor: grey[200],
        buttonHoverBgColor: grey[300],
        color: grey[900],
    },
    dark: {
        bgColor: blueGrey[900],
        containerBgColor: blueGrey[800],
        buttonBgColor: blueGrey[700],
        buttonHoverBgColor: blueGrey[600],
        color: 'white',
    },
};
