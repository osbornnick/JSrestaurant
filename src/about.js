// jshint esversion: 6
export function render() {
  const row = document.querySelector('.content');
  row.classList.add('justify-content-center');
  row.classList.add('flex-grow-1');
  row.classList.add('align-items-center');

  row.innerHTML = `
  <div class="row">
    <h1>We're a group of bagel-makers, currently producing out of a collective kitchen.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra viverra risus eu egestas. Quisque lacus arcu, auctor ut nibh nec, laoreet sollicitudin felis. Nulla non massa est. Ut interdum erat justo, ac iaculis nibh blandit ut. Proin varius sed est ac ullamcorper. Donec pretium libero ac erat posuere, sed rhoncus odio egestas. Praesent eget mauris eleifend, pulvinar nunc a, posuere quam. Vestibulum nec scelerisque sem, in faucibus leo. Sed venenatis luctus elit vitae aliquam. Duis vehicula condimentum ipsum, ut tempor felis sodales ac. Fusce rutrum erat arcu.

    Quisque ut ligula tempor, consequat dui ut, aliquet felis. Aliquam tincidunt dictum nunc, nec auctor dolor placerat sed. Aliquam ullamcorper metus non varius iaculis. Praesent ligula eros, egestas a lobortis et, sodales vel mi. Pellentesque metus justo, fermentum non molestie quis, viverra eu ex. Nam at libero non orci fringilla posuere vel ac elit. Duis luctus odio ullamcorper, lobortis mauris ac, feugiat tellus. Fusce quis tellus at eros lobortis egestas vel id lacus. Integer sed maximus nulla.

    Nam nibh magna, tincidunt nec fermentum vel, cursus eu velit. Maecenas tempus metus fermentum ligula accumsan, non bibendum mi convallis. Vivamus at purus lacus. Cras nec cursus ligula. Sed id nisi lobortis, molestie enim ut, dignissim nisl. Nulla lobortis facilisis sapien eget egestas. Mauris bibendum, sapien eget fringilla blandit, nulla enim gravida massa, eget vestibulum sapien mauris eget tellus. Nunc orci sapien, egestas vitae metus ac, egestas maximus augue. Morbi eu auctor diam. Sed sed dolor quam. Duis faucibus mauris sit amet blandit euismod. Praesent iaculis risus in scelerisque tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non faucibus orci. Vestibulum a dictum magna.

    Nunc sapien nisi, consectetur id interdum et, porttitor ut elit. Quisque id odio id odio accumsan molestie. Morbi ut egestas lorem, cursus rhoncus metus. Suspendisse sodales felis risus, ac rutrum ligula scelerisque hendrerit. Nunc tellus lorem, feugiat a bibendum ac, tempor eget sem. Vivamus et justo diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non quam fringilla, pharetra eros ac, lacinia ipsum. Nulla placerat nibh lacus, quis tristique quam cursus vel. Sed suscipit lobortis gravida.

    Curabitur vel risus a ex rutrum eleifend. Pellentesque laoreet, augue sed consequat vehicula, orci ipsum interdum ipsum, eu porttitor arcu mi sit amet est. Nullam non porttitor velit. Nulla facilisi. Curabitur iaculis elementum aliquam. Phasellus lacinia nibh iaculis mi euismod gravida. Aliquam luctus maximus nisi sed ullamcorper. Vivamus in aliquet quam. Nullam a eleifend lectus.</p>
  </div>
  `;
}
