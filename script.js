const res = document.getElementById('res');

function Solve(val) {
  res.value += val;
}

function Result() {
  try {
    res.value = eval(res.value);
  } catch {
    res.value = 'Error';
  }
}

function Clear() {
  res.value = '';
}

function Back() {
  res.value = res.value.slice(0, -1);
}

function Squareroot() {
  try {
    res.value = Math.sqrt(eval(res.value));
  } catch {
    res.value = 'Error';
  }
}

function Power() {
  try {
    res.value = Math.pow(eval(res.value), 2);
  } catch {
    res.value = 'Error';
  }
}

function Sine() {
  try {
    res.value = Math.sin(eval(res.value));
  } catch {
    res.value = 'Error';
  }
}

function Cosine() {
  try {
    res.value = Math.cos(eval(res.value));
  } catch {
    res.value = 'Error';
  }
}

function Tangent() {
  try {
    res.value = Math.tan(eval(res.value));
  } catch {
    res.value = 'Error';
  }
}