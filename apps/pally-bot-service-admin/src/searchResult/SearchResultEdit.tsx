import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SearchQueryTitle } from "../searchQuery/SearchQueryTitle";

export const SearchResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
