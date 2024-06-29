import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SearchQueryTitle } from "../searchQuery/SearchQueryTitle";

export const SearchResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="resultText" multiline source="resultText" />
        <ReferenceInput
          source="searchQuery.id"
          reference="SearchQuery"
          label="searchQuery"
        >
          <SelectInput optionText={SearchQueryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
