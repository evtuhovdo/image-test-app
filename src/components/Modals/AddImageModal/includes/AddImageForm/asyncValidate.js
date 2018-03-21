const loadImage = ({ url, resolve, reject }) => {
  const image = new Image();
  image.src = url;

  image.onload = (event) => {
    if (event.currentTarget.width === 0 || event.currentTarget.height === 0) {
      reject();

      return;
    }

    resolve();
  };

  image.onabort = () => {
    reject();
  };

  image.onerror = () => {
    reject();
  };
};

const asyncValidate = values => new Promise((resolve, reject) => loadImage({ url: values.url, resolve, reject }))
  .catch(() => ({ url: 'Provided url is not image' }));

export default asyncValidate;
