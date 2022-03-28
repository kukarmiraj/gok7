import { UserCreateNestedManyWithoutOrganisationsInput } from "./UserCreateNestedManyWithoutOrganisationsInput";

export type OrganisationCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutOrganisationsInput;
};
