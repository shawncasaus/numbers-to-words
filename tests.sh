#run time tests comparing runs with expected outputs

# test one
echo "###########################################"
echo "TEST 1"
echo "INPUT: 52"
echo "EXPECTED: fifty-two"
OUTPUT1=$(yarn start 52)
echo "${OUTPUT1}"
if yarn start 52 | grep -q 'fifty-two'
then
    echo "Test One Succeeded"
else
    echo "Test One Failed"
fi
echo "###########################################"
echo

# test two
echo "###########################################"
echo "TEST 2"
echo "INPUT: 1000"
echo "EXPECTED: one thousand"
OUTPUT1=$(yarn start 1000)
echo "${OUTPUT1}"
if yarn start 1000 | grep -q 'one thousand'
then
    echo "Test Two Succeeded"
else
    echo "Test Two Failed"
fi
echo "###########################################"
echo

# test three
echo "###########################################"
echo "TEST 3"
echo "INPUT: 101"
echo "EXPECTED: one hundred and one"
OUTPUT1=$(yarn start 101)
echo "${OUTPUT1}"
if yarn start 101 | grep -q 'one hundred and one'
then
    echo "Test Three Succeeded"
else
    echo "Test Three Failed"
fi
echo "###########################################"
echo

# test four
echo "###########################################"
echo "TEST 4"
echo "INPUT: 352"
echo "EXPECTED: three hundred and fifty-two"
OUTPUT1=$(yarn start 352)
echo "${OUTPUT1}"
if yarn start 352 | grep -q 'three hundred and fifty-two'
then
    echo "Test Four Succeeded"
else
    echo "Test Four Failed"
fi
echo "###########################################"
echo

# test five
echo "###########################################"
echo "TEST 5"
echo "INPUT: 12300"
echo "EXPECTED: twelve thousand, three hundred"
OUTPUT1=$(yarn start 12300)
echo "${OUTPUT1}"
if yarn start 12300 | grep -q 'twelve thousand, three hundred'
then
    echo "Test Five Succeeded"
else
    echo "Test Five Failed"
fi
echo "###########################################"
echo

# test six
echo "###########################################"
echo "TEST 6"
echo "INPUT: 12345"
echo "EXPECTED: twelve thousand, three hundred and forty-five"
OUTPUT1=$(yarn start 12345)
echo "${OUTPUT1}"
if yarn start 12345 | grep -q 'twelve thousand, three hundred and forty-five'
then
    echo "Test Six Succeeded"
else
    echo "Test Six Failed"
fi
echo "###########################################"
echo