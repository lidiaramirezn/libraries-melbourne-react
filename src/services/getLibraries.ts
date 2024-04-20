const URL = 'https://apimocha.com/lramirezn';
const URL_API = 'https://demo4977042.mockable.io';

export const getLibraries = async () => {
  try {
    const response = await fetch(`${URL_API}/libraries`);
    const libraries = await response.json();

    return libraries?.map((library: any) =>({
      id: library.idLibrary,
      name: library.library,
      address: library.address,
      linkAddress: library.link_address,
      schedule: library.schedule
    }));
  } catch (error) {
    throw new Error('Error with libraries API')
  }
}