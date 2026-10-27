// Hides anything marked data-hide-after="YYYY-MM-DD" once that day is over, in the visitor's time zone.
// The site is only rebuilt when someone pushes, so an event that ended since the last build would
// otherwise still show as upcoming. Lists can say what to show when everything is hidden with
// data-empty-message on their container.
(function () {
  var today = new Date();
  var todayText = today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

  document.querySelectorAll("[data-hide-after]").forEach(function (el) {
    if (el.dataset.hideAfter < todayText) el.hidden = true;
  });

  document.querySelectorAll("[data-empty-message]").forEach(function (list) {
    var anyVisible = Array.prototype.some.call(list.children, function (child) { return !child.hidden; });
    if (!anyVisible) {
      var note = document.createElement("p");
      note.className = "events-empty";
      note.textContent = list.dataset.emptyMessage;
      list.replaceWith(note);
    }
  });
})();
