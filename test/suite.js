var test = require('nodeunit')
	, extend = require('../extend.js').extend;

exports.testOneLevelMerging = function(test) {
	test.expect(2)
	
	var obj1 = { name: 'Johnny' }
		, obj2 = { lastName: 'Quest' };

	extend(obj1, obj2);

	test.equal(obj1.name, 'Johnny', '"name" should be "Jonny"');
	test.equal(obj1.lastName, 'Quest', '"lastName" should be "Quest"');

	test.done()
}

exports.testTwoLevelsMerging = function(test) {
	test.expect(2);

	var obj1 = { sub: { firstValue: 1 } }
		, obj2 = { sub: { secondValue: 2 } };

	extend(obj1, obj2);

	test.equal(obj1.sub.firstValue, 1, 'firstValue should be 1');
	test.equal(obj1.sub.secondValue, 2, 'secondValue should be 2');

	test.done();
}

exports.testMultiLevelMerging = function(test) {
	test.expect(5);

	var obj1 = { 
		name: 'Johnny', 
		sub: { 
			firstValue: 1 
		} 
	}
	, obj2 = { 
		lastName: 'Quest', 
		sub: { 
			secondValue: 2 
		}, 
		sub2: { 
			thirdSub: { 
				thirdValue: 3
			} 
		} 
	};

	extend(obj1, obj2);

	test.equal(obj1.name, 'Johnny', '"name" should be "Jonny"');
	test.equal(obj1.lastName, 'Quest', '"lastName" should be "Quest"');
	test.equal(obj1.sub.firstValue, 1, 'firstValue should be 1');
	test.equal(obj1.sub.secondValue, 2, 'secondValue should be 2');
	test.equal(obj1.sub2.thirdSub.thirdValue, 3, 'thirdValue should be 3');

	test.done();
}