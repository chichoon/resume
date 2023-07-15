import { FootprintType } from '@/types/profileData';

import footprints from '@/assets/data/footprintsInfo.json';

export async function getFootprints() {
  const footprintsList = footprints as FootprintType[];
  const data = await new Promise<FootprintType[]>((resolve) => {
    resolve(footprintsList);
  });

  return data;
}
