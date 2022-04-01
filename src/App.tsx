import { ChangeEvent } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import styled, { ThemeProvider } from "styled-components";

import AdviceCard from "./components/organisms/AdviceCard/AdviceCard";
import { useDarkTheme } from "./assets/hooks/useDarkTheme";
import theme from "./styles/theme";
import BasicThemeSwitcher from "./components/atoms/BasicThemeSwitcher";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 50px;
  background-color: ${({ theme }) => theme.light.bg};

  .dark & {
    background-color: ${({ theme }) => theme.dark.bg};
  }
`;

const App = () => {
  const queryClient = new QueryClient();
  const [mode] = useDarkTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ mode, ...theme }}>
        <Wrapper>
          <AdviceCard />
          <BasicThemeSwitcher />
        </Wrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
