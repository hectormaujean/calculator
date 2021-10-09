import { Box } from '@mui/material';

import { ButtonsContainer } from '../components/Buttons/Container';
import { ButtonsRow } from '../components/Buttons/Row';
import { CalculatorButton } from '../components/Buttons/Button';
import { buttons } from '../const/buttons';
import { ScreenResult } from '../components/Screen/Result';
import { ScreenCurrentOperation } from '../components/Screen/CurrentOperation';

export function Calculator() {
    return (
        <Box
            sx={{
                bgcolor: 'white',
                borderRadius: 4,
                maxWidth: 400,
            }}
        >
            <ScreenCurrentOperation />
            <ScreenResult />
            <ButtonsContainer>
                {buttons.map((row) => (
                    <ButtonsRow key={row.reduce((res, button) => res + button.label.toString(), '')}>
                        {row.map(({ label, color }) => (
                            <CalculatorButton key={label} label={label} color={color} />
                        ))}
                    </ButtonsRow>
                ))}
            </ButtonsContainer>
        </Box>
    );
}
