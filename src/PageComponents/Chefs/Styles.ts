export const styles = {
  chefs_container:
    'grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-auto     xxs:w-full xs:w-10/12 sm:w-full md:w-10/12 lg:w-full',
  chefs_list_container:
    'space-y-6 text-center rounded p-2 border-2 shadow-md bg-gray-100 dark:bg-cardBackground '
};

export const chefsListVariants = {
  offscreen: {
    y: 300,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
};
