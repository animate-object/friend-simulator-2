import FAKES from "../fake";

interface Thought {
  text: string;
}
export interface Friend {
  image: {
    url: string;
  };
  name: string;
  thoughts: Thought[];
}

export const create = (data?: Partial<Friend>): Friend => ({
  image: { url: "test.png" },
  name: "Finbad Hortipants",
  thoughts: FAKES.TEXT.map((text) => ({ text })),
  ...data,
});
