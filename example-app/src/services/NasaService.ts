enum PatentDataIndexes {
  Id,
  Title = 2,
  Description,
  ImageUrl = 10
}

type LibraryItemResponseShape = {
  data: [
    {
      nasa_id: string,
      title: string
    }
  ],
  links: [
    {
      href: string
    }
  ]
}

class NasaService {
  private apiKey: string = 'WmyhwhhQBZJIvTdIQ6KeYZUNenQY7Fazyd2nauB5';

  async smartFetch<T>(
    url: string,
    options?: object
  ): Promise<T | undefined> {
    const response = await fetch(url, options);

    if (response.status >= 400) {
      throw response;
    }

    if (response.status === 204) {
      return undefined;
    }

    return response.json();
  };

  async getPatents(): Promise<Global.PatentDataShape[]> {
    const patentsUrl: string =
      `https://api.nasa.gov/techtransfer/patent/?engine&api_key=${this.apiKey}`;

    const body = await this.smartFetch<{ results: [] }>(patentsUrl);

    return this.transformPatentsData(body && body.results);
  }

  private transformPatentsData = (patentsData: [] = []) : Global.PatentDataShape[] => (
    patentsData.map(patentData => ({
      id: patentData[PatentDataIndexes.Id],
      title: patentData[PatentDataIndexes.Title],
      description: patentData[PatentDataIndexes.Description],
      imageUrl: patentData[PatentDataIndexes.ImageUrl],
    }))
  );

  async getLibraryContent(
    searchValue: string
  ): Promise<Global.LibraryContentDataShape[]> {
    const libraryContentUrl: string =
      `https://images-api.nasa.gov/search?q=${searchValue}&page=1&media_type=image&year_start=1920&year_end=2020`;

    const body = await this.smartFetch<{ collection: { items: [] } }>(libraryContentUrl);

    return this.transformLibraryContentData(body && body.collection.items);
  };

  private transformLibraryContentData = (libraryContentData: [] = []) : Global.LibraryContentDataShape[] => (
    libraryContentData.map((item: LibraryItemResponseShape) => {
      const itemData = item.data[0];
      const itemLinks = item.links[0];

      return {
        id: itemData.nasa_id,
        title: itemData.title,
        link: itemLinks.href
      }
    })
  );
}

export const nasaService = new NasaService();