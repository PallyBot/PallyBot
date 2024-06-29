import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SearchResultList } from "./searchResult/SearchResultList";
import { SearchResultCreate } from "./searchResult/SearchResultCreate";
import { SearchResultEdit } from "./searchResult/SearchResultEdit";
import { SearchResultShow } from "./searchResult/SearchResultShow";
import { SearchQueryList } from "./searchQuery/SearchQueryList";
import { SearchQueryCreate } from "./searchQuery/SearchQueryCreate";
import { SearchQueryEdit } from "./searchQuery/SearchQueryEdit";
import { SearchQueryShow } from "./searchQuery/SearchQueryShow";
import { VoiceRecordingList } from "./voiceRecording/VoiceRecordingList";
import { VoiceRecordingCreate } from "./voiceRecording/VoiceRecordingCreate";
import { VoiceRecordingEdit } from "./voiceRecording/VoiceRecordingEdit";
import { VoiceRecordingShow } from "./voiceRecording/VoiceRecordingShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PallyBotService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SearchResult"
          list={SearchResultList}
          edit={SearchResultEdit}
          create={SearchResultCreate}
          show={SearchResultShow}
        />
        <Resource
          name="SearchQuery"
          list={SearchQueryList}
          edit={SearchQueryEdit}
          create={SearchQueryCreate}
          show={SearchQueryShow}
        />
        <Resource
          name="VoiceRecording"
          list={VoiceRecordingList}
          edit={VoiceRecordingEdit}
          create={VoiceRecordingCreate}
          show={VoiceRecordingShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
