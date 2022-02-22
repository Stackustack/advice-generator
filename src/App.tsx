import AdviceCard from "./components/organisms/AdviceCard/AdviceCard";
import s from "./App.module.scss";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={s.app_wrapper}>
        <AdviceCard />
      </div>
    </QueryClientProvider>
  );
};

export default App;
