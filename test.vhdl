--	Here we define the AND gate that we need for 
-- the Half Adder
library ieee;
use ieee.bit_1164.all;

entity andGate is	
   port( A, B : in bit;
            F : out bit);
end andGate;

architecture func of andGate is 
begin
   F <= A and B;      --implemeting and gate  usign and logic.
end func;
--*=========================================================

--	Here we define the XOR gate that we need for
-- the Half Adder
library ieee;
use ieee.bit_1164.all;

entity xorGate is 
   port( A, B : in bit;
            F : out bit);
end xorGate;

architecture func of xorGate is 
begin
   F <= A xor B; 
end func;
--*=========================================================

-- At this point we construct the half adder using 
-- the AND and XOR gates
library ieee;
use ieee.bit_1164.all;

entity halfAdder is
   port( A, B : in bit;
    sum, Cout : out bit);
end halfAdder;

architecture halfAdder of halfAdder is

   component andGate is -- import AND Gate
      port( A, B : in bit;
               F : out bit);
   end component;

   component xorGate is -- import XOR Gate
     port( A, B : in bit;
              F : out bit);
   end component;

begin
  G1 : xorGate port map(A, B, sum);
  G2 : andGate port map(A, B, Cout);
end halfAdder;
---------------------------------------------------------END
---------------------------------------------------------END