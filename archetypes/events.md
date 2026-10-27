---
# A new event: hugo new events/YYYY-MM-DD-short-name.md
title: "{{ replace (replaceRE `^\d{4}-\d{2}-\d{2}-` "" .File.ContentBaseName) "-" " " | title }}"
date: {{ .Date }}        # when it starts, e.g. 2027-03-12T17:30:00-08:00
endTime: ""              # optional, e.g. "7:00 pm"
# endDate: 2027-03-14    # optional, for an event over several days (then the times are left off)
# allDay: true           # optional, to leave the time off a one-day event
# tentative: true        # optional, tags the date "Tentative date" until it's settled
# decoration: holiday     # optional, a garland on its card and page: holiday, fall, spring or summer (data/event-decorations.yaml)
location: ""
description: ""          # one line, shown on the event cards
---

What the event is, who it's for, and anything families should bring.
