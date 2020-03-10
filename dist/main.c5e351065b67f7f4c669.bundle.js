/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = './src/index.js'));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        window.addEventListener('load', function(event) {
          var div = document.querySelector('div');
          var button = document.createElement('button');
          button.addEventListener('click', buttonHandler);
          button.textContent = 'Add';
          var input = document.createElement('input');
          input.addEventListener('keyup', function(event) {
            if (event.keyCode === 13) {
              event.preventDefault();
              button.click();
            }
          });
          div.insertBefore(input, div.childNodes[0]);
          div.insertBefore(button, div.childNodes[1]);
          var ul = document.createElement('ul');
          div.insertBefore(ul, div.childNodes[0]);

          if (localStorage.getItem('tasks') != undefined) {
            var todoList = JSON.parse(localStorage.getItem('tasks'));

            for (var i = 0; i < todoList.length; i++) {
              var _ul = document.querySelector('ul'); //

              var _div = document.querySelector('div');

              _div.insertBefore(_ul, _div.childNodes[0]); //

              var li = document.createElement('li');
              var text = document.createTextNode(todoList[i]);
              li.appendChild(text);
              document.querySelector('ul').appendChild(li);
            }
          }
        });

        function buttonHandler() {
          var inputValue = document.querySelector('input').value;

          if (inputValue != '') {
            var ul = document.querySelector('ul');
            var div = document.querySelector('div');
            div.insertBefore(ul, div.childNodes[0]);
            var li = document.createElement('li');
            var text = document.createTextNode(inputValue);
            li.appendChild(text);
            document.querySelector('ul').appendChild(li);
            document.querySelector('input').value = '';
            sortList();
            var todoList = document.querySelectorAll('li');
            var textArr = [];

            for (var i = 0; i < todoList.length; i++) {
              textArr.push(todoList[i].textContent);
            }

            localStorage.setItem('tasks', JSON.stringify(textArr));
          }
        }

        function sortList() {
          var list, i, switching, b, shouldSwitch;
          list = document.querySelector('ul');
          switching = true;

          while (switching) {
            switching = false;
            b = list.querySelectorAll('li');

            for (i = 0; i < b.length - 1; i++) {
              shouldSwitch = false;

              if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            }

            if (shouldSwitch) {
              b[i].parentNode.insertBefore(b[i + 1], b[i]);
              switching = true;
            }
          }
        }

        window.addEventListener('storage', function(event) {
          var todoList = JSON.parse(localStorage.getItem('tasks'));
          var ul = document.querySelector('ul');

          while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }

          for (var i = 0; i < todoList.length; i++) {
            var div = document.querySelector('div');
            div.insertBefore(ul, div.childNodes[0]);
            var li = document.createElement('li');
            var text = document.createTextNode(todoList[i]);
            li.appendChild(text);
            document.querySelector('ul').appendChild(li);
          }
        });

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b25IYW5kbGVyIiwidGV4dENvbnRlbnQiLCJpbnB1dCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrIiwiaW5zZXJ0QmVmb3JlIiwiY2hpbGROb2RlcyIsInVsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInRvZG9MaXN0IiwiSlNPTiIsInBhcnNlIiwiaSIsImxlbmd0aCIsImxpIiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJzb3J0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZXh0QXJyIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJsaXN0Iiwic3dpdGNoaW5nIiwiYiIsInNob3VsZFN3aXRjaCIsImlubmVySFRNTCIsInRvTG93ZXJDYXNlIiwicGFyZW50Tm9kZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUssSUFBSXJCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsUUFBSXBCLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFFQUYsT0FBRyxDQUFDVyxZQUFKLENBQWlCRSxFQUFqQixFQUFxQmIsR0FBRyxDQUFDWSxVQUFKLENBQWUsQ0FBZixDQUFyQjtBQUNBLFFBQUlVLEVBQUUsR0FBR3JCLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixJQUF2QixDQUFUO0FBQ0EsUUFBSW1CLElBQUksR0FBR3RCLFFBQVEsQ0FBQ3VCLGNBQVQsQ0FBd0JQLFFBQVEsQ0FBQ0csQ0FBRCxDQUFoQyxDQUFYO0FBQ0FFLE1BQUUsQ0FBQ0csV0FBSCxDQUFlRixJQUFmO0FBQ0F0QixZQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsRUFBNkJ1QixXQUE3QixDQUF5Q0gsRUFBekM7QUFDRDtBQUNGLENBakJELEUiLCJmaWxlIjoibWFpbi5jNWUzNTEwNjViNjdmN2Y0YzY2OS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBldmVudCA9PiB7XHJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XHJcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25IYW5kbGVyKTtcclxuXHJcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcclxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBidXR0b24uY2xpY2soKTtcclxuICAgIH1cclxuICB9KTtcclxuICBkaXYuaW5zZXJ0QmVmb3JlKGlucHV0LCBkaXYuY2hpbGROb2Rlc1swXSk7XHJcbiAgZGl2Lmluc2VydEJlZm9yZShidXR0b24sIGRpdi5jaGlsZE5vZGVzWzFdKTtcclxuICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgZGl2Lmluc2VydEJlZm9yZSh1bCwgZGl2LmNoaWxkTm9kZXNbMF0pO1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSAhPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCB0b2RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidWxcIik7IC8vXHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xyXG5cclxuICAgICAgZGl2Lmluc2VydEJlZm9yZSh1bCwgZGl2LmNoaWxkTm9kZXNbMF0pOyAvL1xyXG4gICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9kb0xpc3RbaV0pO1xyXG4gICAgICBsaS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYnV0dG9uSGFuZGxlcigpIHtcclxuICBsZXQgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZTtcclxuXHJcbiAgaWYgKGlucHV0VmFsdWUgIT0gXCJcIikge1xyXG4gICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XHJcblxyXG4gICAgZGl2Lmluc2VydEJlZm9yZSh1bCwgZGl2LmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpbnB1dFZhbHVlKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgc29ydExpc3QoKTtcclxuXHJcbiAgICBsZXQgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XHJcbiAgICBsZXQgdGV4dEFyciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0ZXh0QXJyLnB1c2godG9kb0xpc3RbaV0udGV4dENvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0ZXh0QXJyKSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0TGlzdCgpIHtcclxuICB2YXIgbGlzdCwgaSwgc3dpdGNoaW5nLCBiLCBzaG91bGRTd2l0Y2g7XHJcbiAgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcclxuICBzd2l0Y2hpbmcgPSB0cnVlO1xyXG5cclxuICB3aGlsZSAoc3dpdGNoaW5nKSB7XHJcbiAgICBzd2l0Y2hpbmcgPSBmYWxzZTtcclxuICAgIGIgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICBzaG91bGRTd2l0Y2ggPSBmYWxzZTtcclxuICAgICAgaWYgKGJbaV0uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCkgPiBiW2kgKyAxXS5pbm5lckhUTUwudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIHNob3VsZFN3aXRjaCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzaG91bGRTd2l0Y2gpIHtcclxuICAgICAgYltpXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShiW2kgKyAxXSwgYltpXSk7XHJcbiAgICAgIHN3aXRjaGluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgZXZlbnQgPT4ge1xyXG4gIGxldCB0b2RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XHJcbiAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpO1xyXG5cclxuICB3aGlsZSAodWwuZmlyc3RDaGlsZCkge1xyXG4gICAgdWwucmVtb3ZlQ2hpbGQodWwuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcclxuXHJcbiAgICBkaXYuaW5zZXJ0QmVmb3JlKHVsLCBkaXYuY2hpbGROb2Rlc1swXSk7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRvZG9MaXN0W2ldKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsXCIpLmFwcGVuZENoaWxkKGxpKTtcclxuICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
