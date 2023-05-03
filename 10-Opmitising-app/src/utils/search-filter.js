export const searchResult = (restoList, searchTerm) =>
  restoList.filter((list) =>
    list.name.toLocaleLowerCase().includes(searchTerm)
  );
