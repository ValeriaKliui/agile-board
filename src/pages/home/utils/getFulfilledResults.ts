export const getFulfilledResults = async <T>(promises: Promise<T>[]) => {
  const results = await Promise.allSettled(promises);

  return results
    .filter((result): result is PromiseFulfilledResult<Awaited<T>> => result.status === 'fulfilled')
    .map((result) => result.value);
};
