grammar Factura;

root       : element+ EOF ;
element    : OPEN NAME attr* SLASH_CLOSE
           | OPEN NAME attr* CLOSE content* END_OPEN NAME CLOSE
           ;
attr       : NAME '=' STRING ;
content    : element | TEXT ;

OPEN       : '<';
CLOSE      : '>';
END_OPEN   : '</';
SLASH_CLOSE: '/>';
NAME       : [a-zA-Z_:][a-zA-Z0-9_\-:.]*;
STRING     : '"' (~["\\])* '"';
TEXT       : ~[<>]+;
WS         : [ \t\r\n]+ -> skip;

