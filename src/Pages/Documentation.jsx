import React from 'react';
import MainHeaders from '../Components/MainHeaders';

const Documentation = () => {
  return (
    <>
      <MainHeaders />
      <div>
        <h2 className='has-text-centered'> This is Documentation Page</h2>
      </div>

      <div class='columns'>
        <div class='column is-half'>
          <div class='content is-normal hero-body'>
            <h1>Hello There!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan, metus ultrices eleifend gravida, nulla nunc varius
              lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui.
              Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
            </p>
            <h2> Its fun </h2>
            <p>
              Curabitur accumsan turpis pharetra{' '}
              <strong>augue tincidunt</strong> blandit. Quisque condimentum
              maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna
              vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
              rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
              neque nisl.
            </p>
            <ul>
              <li>
                In fermentum leo eu lectus mollis, quis dictum mi aliquet.
              </li>
              <li>
                Morbi eu nulla lobortis, lobortis est in, fringilla felis.
              </li>
              <li>
                Aliquam nec felis in sapien venenatis viverra fermentum nec
                lectus.
              </li>
              <li>Ut non enim metus.</li>
            </ul>
          </div>
        </div>
        <div class='column is-half'>
          <div class='content is-normal hero-body'>
            <h1>Hello There!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan, metus ultrices eleifend gravida, nulla nunc varius
              lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui.
              Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
            </p>
            <h2> Its fun </h2>
            <p>
              Curabitur accumsan turpis pharetra
              <strong>augue tincidunt</strong> blandit. Quisque condimentum
              maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna
              vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
              rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
              neque nisl.
            </p>
            <ul>
              <li>
                In fermentum leo eu lectus mollis, quis dictum mi aliquet.
              </li>
              <li>
                Morbi eu nulla lobortis, lobortis est in, fringilla felis.
              </li>
              <li>
                Aliquam nec felis in sapien venenatis viverra fermentum nec
                lectus.
              </li>
              <li>Ut non enim metus.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentation;
