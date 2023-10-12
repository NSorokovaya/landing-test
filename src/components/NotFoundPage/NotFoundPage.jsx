import css from './NotFoundPage.module.scss';

const NotFound = () => {
  return (
    <>
      <div className={css.page}>
        <div className={css.four}>Error 404</div>
        <a href="/landing-test/" className={css.button}>
          Go home
        </a>
      </div>
    </>
  );
};

export default NotFound;
