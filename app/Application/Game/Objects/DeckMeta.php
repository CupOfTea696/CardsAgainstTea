<?php

namespace CAT\Game\Objects;

use CAT\Support\SortedObject;

class DeckMeta extends SortedObject
{
    public $name;
    
    public $source;
    
    public $file;
    
    public $playCode;
    
    public $description;
    
    public $type;
    
    public $locales;
    
    public $calls;
    
    public $responses;
}