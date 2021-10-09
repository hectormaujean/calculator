import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

type Props = {
    currentOperation: string;
};

export function ScreenCurrentOperation({ currentOperation }: Props) {
    return (
        <Box
            sx={{
                paddingTop: 5,
                marginRight: 2,
                marginLeft: 2,
                paddingBottom: 1,
                marginBottom: -1,
                textAlign: 'right',
                overflow: 'scroll',
            }}
        >
            <Typography color={currentOperation ? grey[900] : grey[400]}>
                {currentOperation || 'Pas de calcul en cours'}
            </Typography>
        </Box>
    );
}
