export interface Friend {
  image: {
    url: string;
  };
}

export const create = (data?: Partial<Friend>): Friend => ({
  image: { url: "test.png" },
  ...data,
});
