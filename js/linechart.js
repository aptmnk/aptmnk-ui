var d3 = window.d3;
var _ = window._;

var aggs = {
   "took": 25,
   "timed_out": false,
   "_shards": {
      "total": 5,
      "successful": 5,
      "failed": 0
   },
   "hits": {
      "total": 5400,
      "max_score": 0,
      "hits": []
   },
   "aggregations": {
      "time": {
         "doc_count_error_upper_bound": 0,
         "sum_other_doc_count": 0,
         "buckets": [
            {
               "key": 1,
               "doc_count": 3300,
               "bed_types": {
                  "buckets": [
                     {
                        "key_as_string": "2015-06-19T14:00:00.000Z",
                        "key": 1434722400000,
                        "doc_count": 68,
                        "avg_price": {
                           "value": 1774.7058823529412
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T15:00:00.000Z",
                        "key": 1434726000000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1772.9117647058824
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T16:00:00.000Z",
                        "key": 1434729600000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1772.9117647058824
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T17:00:00.000Z",
                        "key": 1434733200000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1775.264705882353
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T18:00:00.000Z",
                        "key": 1434736800000,
                        "doc_count": 102,
                        "avg_price": {
                           "value": 1775.264705882353
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T19:00:00.000Z",
                        "key": 1434740400000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1777.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T20:00:00.000Z",
                        "key": 1434744000000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1777.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T21:00:00.000Z",
                        "key": 1434747600000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1777.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T22:00:00.000Z",
                        "key": 1434751200000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1777.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T23:00:00.000Z",
                        "key": 1434754800000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1777.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T00:00:00.000Z",
                        "key": 1434758400000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1777.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T01:00:00.000Z",
                        "key": 1434762000000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1777.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T02:00:00.000Z",
                        "key": 1434765600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1766.2727272727273
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T03:00:00.000Z",
                        "key": 1434769200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1766.2727272727273
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T04:00:00.000Z",
                        "key": 1434772800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1766.2727272727273
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T05:00:00.000Z",
                        "key": 1434776400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1766.2727272727273
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T06:00:00.000Z",
                        "key": 1434780000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1766.2727272727273
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T07:00:00.000Z",
                        "key": 1434783600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1766.2727272727273
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T08:00:00.000Z",
                        "key": 1434787200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1766.2727272727273
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T09:00:00.000Z",
                        "key": 1434790800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1766.2727272727273
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T10:00:00.000Z",
                        "key": 1434794400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.6363636363637
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T11:00:00.000Z",
                        "key": 1434798000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.6363636363637
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T12:00:00.000Z",
                        "key": 1434801600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.6363636363637
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T13:00:00.000Z",
                        "key": 1434805200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.6363636363637
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T14:00:00.000Z",
                        "key": 1434808800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.6363636363637
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T15:00:00.000Z",
                        "key": 1434812400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.6363636363637
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T16:00:00.000Z",
                        "key": 1434816000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.6363636363637
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T17:00:00.000Z",
                        "key": 1434819600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.6363636363637
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T18:00:00.000Z",
                        "key": 1434823200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.6363636363637
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T19:00:00.000Z",
                        "key": 1434826800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.3333333333333
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T20:00:00.000Z",
                        "key": 1434830400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.3333333333333
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T21:00:00.000Z",
                        "key": 1434834000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.3333333333333
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T22:00:00.000Z",
                        "key": 1434837600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1765.3333333333333
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T23:00:00.000Z",
                        "key": 1434841200000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1765.264705882353
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T00:00:00.000Z",
                        "key": 1434844800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.2121212121212
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T01:00:00.000Z",
                        "key": 1434848400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.2121212121212
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T02:00:00.000Z",
                        "key": 1434852000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.2121212121212
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T03:00:00.000Z",
                        "key": 1434855600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.2121212121212
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T04:00:00.000Z",
                        "key": 1434859200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.2121212121212
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T05:00:00.000Z",
                        "key": 1434862800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.2121212121212
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T06:00:00.000Z",
                        "key": 1434866400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.2121212121212
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T07:00:00.000Z",
                        "key": 1434870000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T08:00:00.000Z",
                        "key": 1434873600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T09:00:00.000Z",
                        "key": 1434877200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T10:00:00.000Z",
                        "key": 1434880800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T11:00:00.000Z",
                        "key": 1434884400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T12:00:00.000Z",
                        "key": 1434888000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T13:00:00.000Z",
                        "key": 1434891600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T14:00:00.000Z",
                        "key": 1434895200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T15:00:00.000Z",
                        "key": 1434898800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T16:00:00.000Z",
                        "key": 1434902400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T17:00:00.000Z",
                        "key": 1434906000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T18:00:00.000Z",
                        "key": 1434909600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T19:00:00.000Z",
                        "key": 1434913200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1754.4242424242425
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T20:00:00.000Z",
                        "key": 1434916800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1755.030303030303
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T21:00:00.000Z",
                        "key": 1434920400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1755.030303030303
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T22:00:00.000Z",
                        "key": 1434924000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T23:00:00.000Z",
                        "key": 1434927600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T00:00:00.000Z",
                        "key": 1434931200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T01:00:00.000Z",
                        "key": 1434934800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T02:00:00.000Z",
                        "key": 1434938400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T03:00:00.000Z",
                        "key": 1434942000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T06:00:00.000Z",
                        "key": 1434952800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T07:00:00.000Z",
                        "key": 1434956400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T08:00:00.000Z",
                        "key": 1434960000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T09:00:00.000Z",
                        "key": 1434963600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T10:00:00.000Z",
                        "key": 1434967200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T11:00:00.000Z",
                        "key": 1434970800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T12:00:00.000Z",
                        "key": 1434974400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T13:00:00.000Z",
                        "key": 1434978000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T14:00:00.000Z",
                        "key": 1434981600000,
                        "doc_count": 66,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T15:00:00.000Z",
                        "key": 1434985200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T16:00:00.000Z",
                        "key": 1434988800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T17:00:00.000Z",
                        "key": 1434992400000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T18:00:00.000Z",
                        "key": 1434996000000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T19:00:00.000Z",
                        "key": 1434999600000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T20:00:00.000Z",
                        "key": 1435003200000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1753.8181818181818
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T21:00:00.000Z",
                        "key": 1435006800000,
                        "doc_count": 33,
                        "avg_price": {
                           "value": 1756.2727272727273
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T22:00:00.000Z",
                        "key": 1435010400000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1755.9117647058824
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T23:00:00.000Z",
                        "key": 1435014000000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1755.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T00:00:00.000Z",
                        "key": 1435017600000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1755.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T01:00:00.000Z",
                        "key": 1435021200000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1755.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T02:00:00.000Z",
                        "key": 1435024800000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1755.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T03:00:00.000Z",
                        "key": 1435028400000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1755.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T04:00:00.000Z",
                        "key": 1435032000000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1755.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T05:00:00.000Z",
                        "key": 1435035600000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1755.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T06:00:00.000Z",
                        "key": 1435039200000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1755.1764705882354
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T07:00:00.000Z",
                        "key": 1435042800000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1757.735294117647
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T08:00:00.000Z",
                        "key": 1435046400000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1757.735294117647
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T09:00:00.000Z",
                        "key": 1435050000000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1757.735294117647
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T10:00:00.000Z",
                        "key": 1435053600000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1759.5882352941176
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T11:00:00.000Z",
                        "key": 1435057200000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1759.5882352941176
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T12:00:00.000Z",
                        "key": 1435060800000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1759.5882352941176
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T13:00:00.000Z",
                        "key": 1435064400000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1759.5882352941176
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T14:00:00.000Z",
                        "key": 1435068000000,
                        "doc_count": 34,
                        "avg_price": {
                           "value": 1759.5882352941176
                        }
                     }
                  ]
               }
            },
            {
               "key": 2,
               "doc_count": 1902,
               "bed_types": {
                  "buckets": [
                     {
                        "key_as_string": "2015-06-19T14:00:00.000Z",
                        "key": 1434722400000,
                        "doc_count": 40,
                        "avg_price": {
                           "value": 2252.05
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T15:00:00.000Z",
                        "key": 1434726000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2254.6
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T16:00:00.000Z",
                        "key": 1434729600000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2254.6
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T17:00:00.000Z",
                        "key": 1434733200000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2254.6
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T18:00:00.000Z",
                        "key": 1434736800000,
                        "doc_count": 60,
                        "avg_price": {
                           "value": 2254.6
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T19:00:00.000Z",
                        "key": 1434740400000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2250
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T20:00:00.000Z",
                        "key": 1434744000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2250
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T21:00:00.000Z",
                        "key": 1434747600000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2250
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T22:00:00.000Z",
                        "key": 1434751200000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2250
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T23:00:00.000Z",
                        "key": 1434754800000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2250
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T00:00:00.000Z",
                        "key": 1434758400000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2254.5
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T01:00:00.000Z",
                        "key": 1434762000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2254.5
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T02:00:00.000Z",
                        "key": 1434765600000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2254.5
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T03:00:00.000Z",
                        "key": 1434769200000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2254.5
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T04:00:00.000Z",
                        "key": 1434772800000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2254.5
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T05:00:00.000Z",
                        "key": 1434776400000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2254.5
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T06:00:00.000Z",
                        "key": 1434780000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2254.5
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T07:00:00.000Z",
                        "key": 1434783600000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2248.8
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T08:00:00.000Z",
                        "key": 1434787200000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2248.8
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T09:00:00.000Z",
                        "key": 1434790800000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2248.8
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T10:00:00.000Z",
                        "key": 1434794400000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T11:00:00.000Z",
                        "key": 1434798000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T12:00:00.000Z",
                        "key": 1434801600000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T13:00:00.000Z",
                        "key": 1434805200000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T14:00:00.000Z",
                        "key": 1434808800000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T15:00:00.000Z",
                        "key": 1434812400000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T16:00:00.000Z",
                        "key": 1434816000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T17:00:00.000Z",
                        "key": 1434819600000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T18:00:00.000Z",
                        "key": 1434823200000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T19:00:00.000Z",
                        "key": 1434826800000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T20:00:00.000Z",
                        "key": 1434830400000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2251
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T21:00:00.000Z",
                        "key": 1434834000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T22:00:00.000Z",
                        "key": 1434837600000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T23:00:00.000Z",
                        "key": 1434841200000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T00:00:00.000Z",
                        "key": 1434844800000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T01:00:00.000Z",
                        "key": 1434848400000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T02:00:00.000Z",
                        "key": 1434852000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T03:00:00.000Z",
                        "key": 1434855600000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T04:00:00.000Z",
                        "key": 1434859200000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T05:00:00.000Z",
                        "key": 1434862800000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T06:00:00.000Z",
                        "key": 1434866400000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T07:00:00.000Z",
                        "key": 1434870000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T08:00:00.000Z",
                        "key": 1434873600000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T09:00:00.000Z",
                        "key": 1434877200000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T10:00:00.000Z",
                        "key": 1434880800000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T11:00:00.000Z",
                        "key": 1434884400000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T12:00:00.000Z",
                        "key": 1434888000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T13:00:00.000Z",
                        "key": 1434891600000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T14:00:00.000Z",
                        "key": 1434895200000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T15:00:00.000Z",
                        "key": 1434898800000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T16:00:00.000Z",
                        "key": 1434902400000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T17:00:00.000Z",
                        "key": 1434906000000,
                        "doc_count": 20,
                        "avg_price": {
                           "value": 2242.4
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T18:00:00.000Z",
                        "key": 1434909600000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2266.2631578947367
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T19:00:00.000Z",
                        "key": 1434913200000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2266.2631578947367
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T20:00:00.000Z",
                        "key": 1434916800000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2266.2631578947367
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T21:00:00.000Z",
                        "key": 1434920400000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2266.2631578947367
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T22:00:00.000Z",
                        "key": 1434924000000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2266.2631578947367
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T23:00:00.000Z",
                        "key": 1434927600000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2266.2631578947367
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T00:00:00.000Z",
                        "key": 1434931200000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2267.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T01:00:00.000Z",
                        "key": 1434934800000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2267.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T02:00:00.000Z",
                        "key": 1434938400000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2267.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T03:00:00.000Z",
                        "key": 1434942000000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2267.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T06:00:00.000Z",
                        "key": 1434952800000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2267.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T07:00:00.000Z",
                        "key": 1434956400000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2267.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T08:00:00.000Z",
                        "key": 1434960000000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2267.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T09:00:00.000Z",
                        "key": 1434963600000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2272
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T10:00:00.000Z",
                        "key": 1434967200000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2272
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T11:00:00.000Z",
                        "key": 1434970800000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2272
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T12:00:00.000Z",
                        "key": 1434974400000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2272
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T13:00:00.000Z",
                        "key": 1434978000000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2272
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T14:00:00.000Z",
                        "key": 1434981600000,
                        "doc_count": 38,
                        "avg_price": {
                           "value": 2272
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T15:00:00.000Z",
                        "key": 1434985200000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2272
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T16:00:00.000Z",
                        "key": 1434988800000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2273.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T17:00:00.000Z",
                        "key": 1434992400000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2273.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T18:00:00.000Z",
                        "key": 1434996000000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2273.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T19:00:00.000Z",
                        "key": 1434999600000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2273.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T20:00:00.000Z",
                        "key": 1435003200000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2273.315789473684
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T21:00:00.000Z",
                        "key": 1435006800000,
                        "doc_count": 19,
                        "avg_price": {
                           "value": 2280.4210526315787
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T22:00:00.000Z",
                        "key": 1435010400000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2297.6470588235293
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T23:00:00.000Z",
                        "key": 1435014000000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2297.6470588235293
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T00:00:00.000Z",
                        "key": 1435017600000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2302.0588235294117
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T01:00:00.000Z",
                        "key": 1435021200000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2302.0588235294117
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T02:00:00.000Z",
                        "key": 1435024800000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2302.0588235294117
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T03:00:00.000Z",
                        "key": 1435028400000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2302.0588235294117
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T04:00:00.000Z",
                        "key": 1435032000000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2302.0588235294117
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T05:00:00.000Z",
                        "key": 1435035600000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2302.0588235294117
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T06:00:00.000Z",
                        "key": 1435039200000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2302.0588235294117
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T07:00:00.000Z",
                        "key": 1435042800000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2298.1176470588234
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T08:00:00.000Z",
                        "key": 1435046400000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2298.1176470588234
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T09:00:00.000Z",
                        "key": 1435050000000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2298.1176470588234
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T10:00:00.000Z",
                        "key": 1435053600000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2299.823529411765
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T11:00:00.000Z",
                        "key": 1435057200000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2299.823529411765
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T12:00:00.000Z",
                        "key": 1435060800000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2299.823529411765
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T13:00:00.000Z",
                        "key": 1435064400000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2299.823529411765
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T14:00:00.000Z",
                        "key": 1435068000000,
                        "doc_count": 17,
                        "avg_price": {
                           "value": 2299.823529411765
                        }
                     }
                  ]
               }
            },
            {
               "key": 0,
               "doc_count": 198,
               "bed_types": {
                  "buckets": [
                     {
                        "key_as_string": "2015-06-19T14:00:00.000Z",
                        "key": 1434722400000,
                        "doc_count": 4,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T15:00:00.000Z",
                        "key": 1434726000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T16:00:00.000Z",
                        "key": 1434729600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T17:00:00.000Z",
                        "key": 1434733200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T18:00:00.000Z",
                        "key": 1434736800000,
                        "doc_count": 6,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T19:00:00.000Z",
                        "key": 1434740400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T20:00:00.000Z",
                        "key": 1434744000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T21:00:00.000Z",
                        "key": 1434747600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T22:00:00.000Z",
                        "key": 1434751200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-19T23:00:00.000Z",
                        "key": 1434754800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T00:00:00.000Z",
                        "key": 1434758400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T01:00:00.000Z",
                        "key": 1434762000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T02:00:00.000Z",
                        "key": 1434765600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T03:00:00.000Z",
                        "key": 1434769200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T04:00:00.000Z",
                        "key": 1434772800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T05:00:00.000Z",
                        "key": 1434776400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T06:00:00.000Z",
                        "key": 1434780000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T07:00:00.000Z",
                        "key": 1434783600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T08:00:00.000Z",
                        "key": 1434787200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T09:00:00.000Z",
                        "key": 1434790800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T10:00:00.000Z",
                        "key": 1434794400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T11:00:00.000Z",
                        "key": 1434798000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T12:00:00.000Z",
                        "key": 1434801600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T13:00:00.000Z",
                        "key": 1434805200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T14:00:00.000Z",
                        "key": 1434808800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T15:00:00.000Z",
                        "key": 1434812400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T16:00:00.000Z",
                        "key": 1434816000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T17:00:00.000Z",
                        "key": 1434819600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T18:00:00.000Z",
                        "key": 1434823200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T19:00:00.000Z",
                        "key": 1434826800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T20:00:00.000Z",
                        "key": 1434830400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T21:00:00.000Z",
                        "key": 1434834000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T22:00:00.000Z",
                        "key": 1434837600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-20T23:00:00.000Z",
                        "key": 1434841200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T00:00:00.000Z",
                        "key": 1434844800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T01:00:00.000Z",
                        "key": 1434848400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T02:00:00.000Z",
                        "key": 1434852000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T03:00:00.000Z",
                        "key": 1434855600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T04:00:00.000Z",
                        "key": 1434859200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T05:00:00.000Z",
                        "key": 1434862800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T06:00:00.000Z",
                        "key": 1434866400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T07:00:00.000Z",
                        "key": 1434870000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T08:00:00.000Z",
                        "key": 1434873600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T09:00:00.000Z",
                        "key": 1434877200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T10:00:00.000Z",
                        "key": 1434880800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T11:00:00.000Z",
                        "key": 1434884400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T12:00:00.000Z",
                        "key": 1434888000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T13:00:00.000Z",
                        "key": 1434891600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T14:00:00.000Z",
                        "key": 1434895200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T15:00:00.000Z",
                        "key": 1434898800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T16:00:00.000Z",
                        "key": 1434902400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T17:00:00.000Z",
                        "key": 1434906000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T18:00:00.000Z",
                        "key": 1434909600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T19:00:00.000Z",
                        "key": 1434913200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T20:00:00.000Z",
                        "key": 1434916800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T21:00:00.000Z",
                        "key": 1434920400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T22:00:00.000Z",
                        "key": 1434924000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-21T23:00:00.000Z",
                        "key": 1434927600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T00:00:00.000Z",
                        "key": 1434931200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T01:00:00.000Z",
                        "key": 1434934800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T02:00:00.000Z",
                        "key": 1434938400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T03:00:00.000Z",
                        "key": 1434942000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T06:00:00.000Z",
                        "key": 1434952800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T07:00:00.000Z",
                        "key": 1434956400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T08:00:00.000Z",
                        "key": 1434960000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T09:00:00.000Z",
                        "key": 1434963600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T10:00:00.000Z",
                        "key": 1434967200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T11:00:00.000Z",
                        "key": 1434970800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T12:00:00.000Z",
                        "key": 1434974400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T13:00:00.000Z",
                        "key": 1434978000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T14:00:00.000Z",
                        "key": 1434981600000,
                        "doc_count": 4,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T15:00:00.000Z",
                        "key": 1434985200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T16:00:00.000Z",
                        "key": 1434988800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T17:00:00.000Z",
                        "key": 1434992400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T18:00:00.000Z",
                        "key": 1434996000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T19:00:00.000Z",
                        "key": 1434999600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T20:00:00.000Z",
                        "key": 1435003200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T21:00:00.000Z",
                        "key": 1435006800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T22:00:00.000Z",
                        "key": 1435010400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-22T23:00:00.000Z",
                        "key": 1435014000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T00:00:00.000Z",
                        "key": 1435017600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T01:00:00.000Z",
                        "key": 1435021200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T02:00:00.000Z",
                        "key": 1435024800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T03:00:00.000Z",
                        "key": 1435028400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T04:00:00.000Z",
                        "key": 1435032000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T05:00:00.000Z",
                        "key": 1435035600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T06:00:00.000Z",
                        "key": 1435039200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T07:00:00.000Z",
                        "key": 1435042800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T08:00:00.000Z",
                        "key": 1435046400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T09:00:00.000Z",
                        "key": 1435050000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1379
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T10:00:00.000Z",
                        "key": 1435053600000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1401
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T11:00:00.000Z",
                        "key": 1435057200000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1401
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T12:00:00.000Z",
                        "key": 1435060800000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1401
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T13:00:00.000Z",
                        "key": 1435064400000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1401
                        }
                     },
                     {
                        "key_as_string": "2015-06-23T14:00:00.000Z",
                        "key": 1435068000000,
                        "doc_count": 2,
                        "avg_price": {
                           "value": 1401
                        }
                     }
                  ]
               }
            }
         ]
      }
   }
};


function setupLineChart(selector, xValues, yValues) {

    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var svg = d3.select(selector).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(d3.extent(xValues));
      y.domain(d3.extent(yValues));

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Price ($)");


    return {x: x, y: y, svg: svg, width: width, height: height};
  }



  var allData = [];

  allData = aggs.aggregations.time.buckets.map(function(bed) {

    return bed.bed_types.buckets.map(function(timepoint) {

        return {
            date: new Date(timepoint.key_as_string),
            bed: bed.key,
            avg_price: timepoint.avg_price.value,
        };
    });

  });

  var xValues = [];
  allData.forEach(function(d) {
      xValues = xValues.concat(_.map(d, 'date').map(function(date) {return new Date(date); }));
  });

  var yValues = [];
  allData.forEach(function(d) {
      yValues = yValues.concat(_.map(d, 'avg_price'));
  });

  var lineChart = setupLineChart('#linechart', xValues, yValues);


  allData.forEach(function(data) {
        var line = d3.svg.line()
            .x(function(d) { return lineChart.x(d.date); })
            .y(function(d) { return lineChart.y(d.avg_price); });

        lineChart.svg.append("path")
                  .datum(data)
                  .attr("class", "line")
                  .attr("d", line);


                  var labelX = (lineChart.width/2);
                  var labelY = lineChart.y(data[0].avg_price) - 13;
      lineChart.svg.append("text")
  		.attr("transform", "translate(" + labelX + "," + labelY + ")")
  		.attr("dy", ".35em")
  		.attr("text-anchor", "start")
  		.style("fill", "gray")
  		.text(data[0].bed + " bed");
  });
