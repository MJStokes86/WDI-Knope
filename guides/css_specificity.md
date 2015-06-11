
##Specificity hierarchy

---

Every selector has its place in the specificity hierarchy. There are five distinct categories which define the specificity level of a given selector. They are listed here in order of precedence:

1. **!important:** Any property declaration with the term !important takes highest precedence, even over inline styles. If !important is declared more than once on conflicting properties targeting the same element, you CSS author be shot, and the other precedence rules are in effect. It’s as if the weight of the selector with the !important declaration were 1-X-A-B-C, for that property only (where A, B and C are the actual values of the parent selector as described below). Because of this, important should not be used, but can be handy in debugging.

2. **style="":**  Inline styles (Presence of style in HTML document).
  An inline style lives within your HTML document. It is attached directly to the element to be styled. *Example:*
  ```css
  <h1 style="color: #fff;">. The weight of style="" is 1-0-0-0.
  ```

3. **id:** (# of ID selectors)
ID is an identifier for your page elements, such as #div. The weight of an id selector is 1-0-0 per id.

4. **Class, attribute and pseudo-class:** (# of class selectors).
This group includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc, have the same weight of 0-1-0.

5. **type:** Elements and pseudo-elements (# of Element (type) selectors).
Including for instance :before and :after. These have the lowest value in terms of specificity with 0-0-1 per element.

If more than one selector have the same specificity, then adhere to the cascade: the last declared rule takes precedence.
