const loadImage = ({ url, resolve, reject }) => {
  const image = new Image();
  image.src = url;

  image.onload = function () {
    if (this.width === 0 || this.height === 0) {
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
